package com.unimini.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@Mapper
public interface MingleMapper {

	List<Map<String, String>> getAllMingleList();
	Map<String, String> getMingleInfo(String eventCode);
	List<Map<String, String>> getMingleUserInfo(String userId, String eventCode);

	List<Map<String, String>> getApplicantUnizone(String eventCode);
	List<Map<String, String>> getParticipantUnizone(String eventCode);
	List<Map<String, String>> getRefuseUnizone(String eventCode);
	int setUserStatusCode(Map<String, String> paramMap);
	Map<String, String> getMingleMyInfo(String userId, String eventCode);
	void updateMingleLike(String isLikeForm_EventCode, String isLikeForm_UserId, String isLikeForm_Flag);
	void updateMingleIn(String isInForm_EventCode, String isInForm_UserId, String isInForm_Flag);

}
